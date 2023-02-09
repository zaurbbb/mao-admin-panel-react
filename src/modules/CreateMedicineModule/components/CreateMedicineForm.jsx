import React, { useState } from "react";

import { medicinesSelectors } from "../../../store/selectors";
import { createMedicine } from "../asyncActions/createAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import FormElementComponent from "../../../components/FormElementComponent";

const CreateMedicineForm = () => {
    const formTagClassName = `form form--create-medicine`;
    const { medicinesArr } = useAppSelector(medicinesSelectors);
    const theLastElemId = medicinesArr.length > 0 ? medicinesArr[medicinesArr.length - 1].id : 1;
    const dispatch = useAppDispatch();

    const [children, setChildren] = useState("");
    const [contraindications, setContraindications] = useState("");
    const [elders, setElders] = useState("");
    const [classEng, setClassEng] = useState("");
    const [classKaz, setClassKaz] = useState("");
    const [classRus, setClassRus] = useState("");
    const [group, setGroup] = useState("");
    const [nameEng, setNameEng] = useState("");
    const [nameKaz, setNameKaz] = useState("");
    const [nameRus, setNameRus] = useState("");
    const [indications, setIndications] = useState("");
    const [kidneysDisorders, setKidneysDisorders] = useState("");
    const [liverDisorders, setLiverDisorders] = useState("");
    const [notice, setNotice] = useState("");
    const [pd, setPd] = useState("");
    const [pk, setPk] = useState("");
    const [pregnancy, setPregnancy] = useState("");
    const [sideEffects, setSideEffects] = useState("");

    const handleChildren = event => {
        setChildren(event.target.value);
    }

    const handleContraindications = event => {
        setContraindications(event.target.value);
    }

    const handleElders = event => {
        setElders(event.target.value);
    }

    const handleClassEng = event => {
        setClassEng(event.target.value);
    }

    const handleClassKaz = event => {
        setClassKaz(event.target.value);
    }

    const handleClassRus = event => {
        setClassRus(event.target.value);
    }

    const handleGroup = event => {
        setGroup(event.target.value);
    }

    const handleNameEng = event => {
        setNameEng(event.target.value);
    }

    const handleNameKaz = event => {
        setNameKaz(event.target.value);
    }

    const handleNameRus = event => {
        setNameRus(event.target.value);
    }

    const handleIndications = event => {
        setIndications(event.target.value);
    }

    const handleKidneysDisorders = event => {
        setKidneysDisorders(event.target.value);
    }

    const handleLiverDisorders = event => {
        setLiverDisorders(event.target.value);
    }

    const handleNotice = event => {
        setNotice(event.target.value);
    }

    const handlePd = event => {
        setPd(event.target.value);
    }

    const handlePk = event => {
        setPk(event.target.value);
    }

    const handlePregnancy = event => {
        setPregnancy(event.target.value);
    }

    const handleSideEffects = event => {
        setSideEffects(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createMedicine(
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
        ));
    };


    return (
        <form
            onSubmit={handleSubmit}
            className={formTagClassName}
        >
            <FormElementComponent
                labelTextValue="Class in English"
                inputType="text"
                inputValue={classEng}
                inputOnChange={handleClassEng}
            />

            <FormElementComponent
                labelTextValue="Class in Kazakh"
                inputType="text"
                inputValue={classKaz}
                inputOnChange={handleClassKaz}
            />

            <FormElementComponent
                labelTextValue="Class in Russian"
                inputType="text"
                inputValue={classRus}
                inputOnChange={handleClassRus}
            />

            <FormElementComponent
                labelTextValue="Name in English"
                inputType="text"
                inputValue={nameEng}
                inputOnChange={handleNameEng}
            />

            <FormElementComponent
                labelTextValue="Name in Kazakh"
                inputType="text"
                inputValue={nameKaz}
                inputOnChange={handleNameKaz}
            />

            <FormElementComponent
                labelTextValue="Name in Russian"
                inputType="text"
                inputValue={nameRus}
                inputOnChange={handleNameRus}
            />

            <FormElementComponent
                labelTextValue="Contraindications for children"
                textareaValue={children}
                textareaOnChange={handleChildren}
            />

            <FormElementComponent
                labelTextValue="General contraindications"
                textareaValue={contraindications}
                textareaOnChange={handleContraindications}
            />

            <FormElementComponent
                labelTextValue="Contraindications for elders"
                textareaValue={elders}
                textareaOnChange={handleElders}
            />

            <FormElementComponent
                labelTextValue="Group"
                textareaValue={group}
                textareaOnChange={handleGroup}
            />

            <FormElementComponent
                labelTextValue="Indications"
                textareaValue={indications}
                textareaOnChange={handleIndications}
            />

            <FormElementComponent
                labelTextValue="Contraindications for kidneys disease"
                textareaValue={kidneysDisorders}
                textareaOnChange={handleKidneysDisorders}
            />

            <FormElementComponent
                labelTextValue="Contraindications for liver disease"
                textareaValue={liverDisorders}
                textareaOnChange={handleLiverDisorders}
            />

            <FormElementComponent
                labelTextValue="Notice"
                textareaValue={notice}
                textareaOnChange={handleNotice}
            />

            <FormElementComponent
                labelTextValue="Definition"
                textareaValue={pd}
                textareaOnChange={handlePd}
            />

            <FormElementComponent
                labelTextValue="After Usage"
                textareaValue={pk}
                textareaOnChange={handlePk}
            />

            <FormElementComponent
                labelTextValue="For Pregnant"
                textareaValue={pregnancy}
                textareaOnChange={handlePregnancy}
            />

            <FormElementComponent
                labelTextValue="Side Effects"
                textareaValue={sideEffects}
                textareaOnChange={handleSideEffects}
            />

            <FormElementComponent
                inputType={"submit"}
                inputValue={"Сreate new medicine"}
            />
        </form>
    );
};

export default CreateMedicineForm;