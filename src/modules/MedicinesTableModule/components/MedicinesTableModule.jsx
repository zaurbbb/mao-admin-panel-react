import React, {
    useEffect,
    useMemo
} from "react";

import { medicinesSelectors } from "../../../store/selectors";
import { getMedicines } from "../asyncActions/medicinesAsyncActions";

import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

import HeaderComponent from "../../../components/HeaderComponent";
import Loader from "../../../loader/Loader";
import MedicinesTable from "./MedicinesTable";

const MedicinesTableModule = () => {
    const dispatch = useAppDispatch();
    const { medicinesArr, isFetching } = useAppSelector(medicinesSelectors);
    const medicinesList = useMemo(() => medicinesArr, [medicinesArr]);
    // console.log("medicinesList[0]", medicinesList[0]);

    useEffect(() => {
        dispatch(getMedicines());
    }, [dispatch]);

    return (
        <section className="medicines-table">
            <HeaderComponent
                textValue="Medicines Catalogue"
                icon="plus"
                link="/createMedicine"
            />

            {medicinesList.length === 0 ?
                <h1>There's no data</h1>
                :
                !isFetching ?
                    <MedicinesTable
                        medicinesList={medicinesList}
                    /> : <Loader />
            }
        </section>
    );
};

export default MedicinesTableModule;