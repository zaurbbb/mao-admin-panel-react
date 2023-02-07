import API from "../../../api";
import {
    setIsSnackbarOpened,
    setSnackbarContent
} from "../../../store/actions/snackbarActions";

export const createMedicine = (
    theLastElemId,
    children,
    contraindications,
    elders,
    classEng,
    classKaz,
    classRus,
    group,
    nameEng,
    nameKaz,
    nameRus,
    indications,
    kidneysDisorders,
    liverDisorders,
    notice,
    pd,
    pk,
    pregnancy,
    sideEffects
) => {
    return async function (dispatch) {
        try {
            await API.post("/med/createMedicament", {
                id: theLastElemId + 1,
                children_ru: children,
                contraindications_ru: contraindications,
                elders_ru: elders,
                name_eng: nameEng,
                name_kaz: nameKaz,
                name_ru: nameRus,
                group: group,
                class_eng: classEng,
                class_kaz: classKaz,
                class_ru: classRus,
                indications: indications,
                kidneys_disorders_ru: kidneysDisorders,
                liver_disorders_ru: liverDisorders,
                notice: notice,
                pd_ru: pd,
                pk_ru: pk,
                pregnancy: pregnancy,
                side_effects_ru: sideEffects
            });
            window.location.href = "/medicines";
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "success",
                textValue: "Medicine has been successfully added to the catalogue"
            }));
        } catch (error) {
            const errorMessage = error.response.data.message;
            console.log(errorMessage);
            dispatch(setIsSnackbarOpened(true));
            dispatch(setSnackbarContent({
                status: "error",
                textValue: errorMessage
            }));
            console.error("errorMessage: ", errorMessage);
        }
    }
};
