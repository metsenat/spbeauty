//import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-2 p-4 gray-border justify-content-between col-4'>
            <div className='d-inline-flex flex-column gap-3'>
                <div className='title pb-4'>Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>               
            </div>
            <div><SecondaryButton>Добавить филиал</SecondaryButton></div>
        </div>
    );
}

export default Addresses;