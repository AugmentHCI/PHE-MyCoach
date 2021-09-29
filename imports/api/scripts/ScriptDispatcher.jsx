import PainEducationScript from './PainEducationScript';
import ActivityWorkScript from './ActivityWorkScript';
import ThoughtsEmotionsScript from './ThoughtsEmotionsScript';
import StressResilienceScript from './StressResilienceScript';
import MovementScript from './MovementScript';
import SocialScript from './SocialScript';

export function getModule({module}) {
    switch (module) {
        case "PE":
        case "paineducation":
            return PainEducationScript
        case "ACT":
        case "activitywork":
            return ActivityWorkScript
        case "TE":
        case "thoughtsemotions":
            return ThoughtsEmotionsScript
        case "STR":
        case "stressresilience":
            return StressResilienceScript
        case "MOV":
        case "movement":
            return MovementScript
        case "SOC":
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
    return [];
}
