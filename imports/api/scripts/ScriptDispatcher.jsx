export async function getModule({module}) {
    switch (module) {
        case "PE":
        case "paineducation":
            return import('./PainEducationScript');
        case "ACT":
        case "activitywork":
            return import('./ActivityWorkScript');
        case "TE":
        case "thoughtsemotions":
            return import('./ThoughtsEmotionsScript');
        case "STR":
        case "stressresilience":
            return import('./StressResilienceScript');
        case "MOV":
        case "movement":
            return import('./MovementScript');
        case "SOC":
        case "social":
            return import('./SocialScript');
        default:
            return {};
    }
}

export async function getSubmodule({module, submoduleID}) {
    const fetchedModule = await getModule({module: module});
    if (!fetchedModule?.default?.submodules) return [];
    for (const submodule of fetchedModule.default.submodules) {
        if (submodule.id === submoduleID) return submodule;
    }
    return [];
}
