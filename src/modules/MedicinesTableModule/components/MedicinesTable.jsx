import React, { memo } from "react";

import { transformMedicineObjectToArray } from "../helpers/transformMedicineObjectToArray";
import { flatObjectToArray } from "../helpers/flatObjectToArray";

import { deleteMedicine } from "../asyncActions/medicinesAsyncActions";

import { useAppDispatch } from "../../../hooks/useAppDispatch";

import { medicinesTableHeaderData } from "../consts/medicinesTableHeaderData";

import TableRowComponent from "../../../components/TableRowComponent";

const MedicinesTable = memo(({ medicinesList }) => {
    const dispatch = useAppDispatch();

    const deleteMedicineFunction = (id) => {
        return dispatch(deleteMedicine(id));
    };

    //  objItem = id, name_ru, name_kaz, name_eng, class_ru, class_kaz, class_eng,
    //  group, pd_ru, pk_ru, indications, side_effects_ru, contraindications_ru,
    //  pregnancy, liver_disorders_ru, kidneys_disorders_ru, children_ru, notice, elders_ru
    return (
        <div className="table">
            <TableRowComponent
                data={medicinesTableHeaderData}
            />
            {medicinesList.map((objItem, index) => {
                const objKeys = Object.keys(objItem);
                const arrItem = transformMedicineObjectToArray(objKeys, objItem);
                const flattenItem = flatObjectToArray(arrItem);
                return <TableRowComponent
                        key={index}
                        data={flattenItem}
                        onClick={() => deleteMedicineFunction(objItem.id)}
                        icon={"delete"}
                        link={`/medicines`}
                    />;
            })}
        </div>
    );

});

export default MedicinesTable;
