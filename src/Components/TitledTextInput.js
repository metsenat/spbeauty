import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 0px;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    background: #F8FAFC;
    color: #94A3B8;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption my-gray'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2 px-3' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;