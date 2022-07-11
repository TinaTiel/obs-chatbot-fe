import SelectInput from "../../../../common/form/SelectInput";

const ObsSourceVisibilityForm = ({prefix, control}) => {

    // TODO: query OBS API for sources by scene, customize select to support categories / showing sources under scene headers. Check V5 API, contribute to the Java API project again...
    const sceneOptions = [{label: 'TODO', value: 'todo'}];
    const sourceOptions = [{label: 'TODO', value: 'todo'}];
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