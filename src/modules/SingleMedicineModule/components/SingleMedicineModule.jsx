import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { convertObjectToFlattenArray } from "../../../helpers/convertObjectToFlattenArray";

import { medicinesSelectors } from "../../../store/selectors";

import { getMedicine } from "../asyncActions/medicineAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import HeaderComponent from "../../../components/HeaderComponent";
import CardComponent from "../../../components/CardComponent";
import Loader from "../../../Loader";

const SingleMedicineModule = () => {
    const { medicineId } = useParams();
    const { medicineItem, isFetching } = useAppSelector(medicinesSelectors);
    const headerTitle = `Medicine No. ${medicineId}`;
    const dispatch = useAppDispatch();
    const flatMedicineItem = convertObjectToFlattenArray(medicineItem, "medicineItem");
    console.log("flatMedicineItem", flatMedicineItem)

    useEffect(() => {
        dispatch(getMedicine(medicineId));
    }, [dispatch, medicineId]);

    return (
        <section className="single-medicine">
            <HeaderComponent
                textValue={headerTitle}
                icon="edit"
                link={"/"}
            />
            {!isFetching ?
                <CardComponent
                    obj={medicineItem}
                    arr={flatMedicineItem}
                /> : <Loader />
            }
        </section>
    );
};

export default SingleMedicineModule;