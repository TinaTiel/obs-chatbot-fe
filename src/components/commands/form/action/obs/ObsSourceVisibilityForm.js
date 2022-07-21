import SelectInput from "../../../../common/form/SelectInput";
import { useFindAllScenesQuery } from '../../../../../services/obs';

const ObsSourceVisibilityForm = ({prefix, control, watch}) => {

    const {data, error, isLoading} = useFindAllScenesQuery();
    const selectedScene = watch(`${prefix}.sceneName`);
    const selectedSource = watch(`${prefix}.sourceName`);
    
    let sceneOptions = [];
    let sourceOptions = [];

    if(data) {

        sceneOptions.push(
            ...data.map(scene => ({
                label: scene.name,
                value: scene.name
            }))
        );
    
        if(selectedScene) {
            const sourcesForScene = data
                .find(scene => scene.name === selectedScene)
                .sources
                .map(source => ({
                    label: source.name,
                    value: source.name
                }));
            sourceOptions.push(...sourcesForScene);
        } else {
            const listOfSources = data.map(scene => {
                return scene.sources.map(source => ({
                    label: source.name,
                    value: source.name
                }))
            });
            listOfSources.forEach(sources => sourceOptions.push(...sources));
        }
    }

    const visiblilityOptions = [
        {
            label: 'Show',
            value: true
        },
        {
            label: 'Hide',
            value: false
        }
    ]

    return (
        <div>
            <SelectInput 
                control={control}
                name={`${prefix}.sceneName`}
                label={'Scene Name (optional; uses current scene if empty)'}
                options={sceneOptions}
                isClearable={true}
            />
            <SelectInput 
                control={control}
                name={`${prefix}.sourceName`}
                label={'Source Name'}
                options={sourceOptions}
            />
            {/* While a boolean could work here, it implies a default
                behavior / no decision required by the user. A select
                box makes more sense since we need the user to choose
                what happens; e.g. if a scene will be shown or hidden. */}
            <SelectInput 
                control={control}
                name={`${prefix}.visible`}
                label={'Visibility'}
                options={visiblilityOptions}
            />
        </div>
    )
}

export default ObsSourceVisibilityForm;