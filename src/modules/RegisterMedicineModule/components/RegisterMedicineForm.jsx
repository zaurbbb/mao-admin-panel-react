import React, { useState } from "react";

import { medicinesSelectors } from "../../../store/selectors";
import { registerMedicine } from "../asyncActions/registerAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import FormElementComponent from "../../../components/FormElementComponent";

const RegisterMedicineForm = () => {
    const formClassName = "form";
    const formTagClassName = `${formClassName} ${formClassName}--register-medicine`;
    const { medicinesArr } = useAppSelector(medicinesSelectors);
    const theLastElemId = medicinesArr[medicinesArr.length - 1].id;
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
        dispatch(registerMedicine(
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
                elementClassName={formClassName}
                labelTextValue="Class in English"
                inputType="text"
                inputValue={classEng}
                inputOnChange={handleClassEng}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Class in Kazakh"
                inputType="text"
                inputValue={classKaz}
                inputOnChange={handleClassKaz}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Class in Russian"
                inputType="text"
                inputValue={classRus}
                inputOnChange={handleClassRus}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Name in English"
                inputType="text"
                inputValue={nameEng}
                inputOnChange={handleNameEng}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Name in Kazakh"
                inputType="text"
                inputValue={nameKaz}
                inputOnChange={handleNameKaz}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Name in Russian"
                inputType="text"
                inputValue={nameRus}
                inputOnChange={handleNameRus}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Contraindications for children"
                textareaValue={children}
                textareaOnChange={handleChildren}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="General contraindications"
                textareaValue={contraindications}
                textareaOnChange={handleContraindications}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Contraindications for elders"
                textareaValue={elders}
                textareaOnChange={handleElders}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Group"
                textareaValue={group}
                textareaOnChange={handleGroup}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Indications"
                textareaValue={indications}
                textareaOnChange={handleIndications}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Contraindications for kidneys disease"
                textareaValue={kidneysDisorders}
                textareaOnChange={handleKidneysDisorders}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Contraindications for liver disease"
                textareaValue={liverDisorders}
                textareaOnChange={handleLiverDisorders}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Notice"
                textareaValue={notice}
                textareaOnChange={handleNotice}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Definition"
                textareaValue={pd}
                textareaOnChange={handlePd}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="After Usage"
                textareaValue={pk}
                textareaOnChange={handlePk}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="For Pregnant"
                textareaValue={pregnancy}
                textareaOnChange={handlePregnancy}
            />

            <FormElementComponent
                elementClassName={formClassName}
                labelTextValue="Side Effects"
                textareaValue={sideEffects}
                textareaOnChange={handleSideEffects}
            />

            <FormElementComponent
                elementClassName={formClassName}
                inputType={"submit"}
                inputValue={"Сreate new medicine"}
            />
        </form>
    );
};

export default RegisterMedicineForm;