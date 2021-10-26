import PainEducationScript from './PainEducationScript';
import ActivityWorkScript from './ActivityWorkScript';
import ThoughtsEmotionsScript from './ThoughtsEmotionsScript';
import StressResilienceScript from './StressResilienceScript';
import MovementScript from './MovementScript';
import SocialScript from './SocialScript';

export function getModule({module}) {
    switch (module.toLowerCase()) {
        case "pe":
        case "paineducation":
            return PainEducationScript
        case "act":
        case "activitywork":
            return ActivityWorkScript
        case "te":
        case "thoughtsemotions":
            return ThoughtsEmotionsScript
        case "str":
        case "stress":
        case "stressresilience":
            return StressResilienceScript
        case "mov":
        case "movement":
            return MovementScript
        case "soc":
        case "social":
            return SocialScript
        default:
            return {};
    }
}

export function getSubmodule({module, submoduleID}) {
    const fetchedModule = getModule({module: module});
    if (!fetchedModule?.submodules) return [];
    for (const submodule of fetchedModule.submodules) {
        if (submodule.id === submoduleID) return submodule;
    }
    return undefined;
}

export function getSubmoduleMetadata({module, submoduleID}) {
    const fetchedModule = getModule({module: module});
    if (!fetchedModule?.submodules) return [];
    for (const submodule of fetchedModule.submodules) {
        if (submodule.id === submoduleID) {
            const fetchedSubmodule = JSON.parse(JSON.stringify(submodule));
            delete fetchedSubmodule.cards;
            return fetchedSubmodule;
        }
    }
    return undefined;
}
