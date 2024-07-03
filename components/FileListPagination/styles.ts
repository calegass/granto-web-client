import styled from "styled-components";

export const PagButton = styled.button`
    padding: 0.75rem 1.5rem;
    margin: 5px 15px;
    background-color: ${(props) => props.theme.colors.granto_button};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.granto_button_hover};
    }

    &:disabled {
        background-color: ${(props) => props.theme.colors.granto_button_disabled};
        cursor: not-allowed;
    }
`;

export const PagSpan = styled.span`
    font-size: 1.2rem;
    margin: 0 1rem;
    color: ${(props) => props.theme.colors.primary};
`;

export const FileListContainer = styled.div`
    ul {
        list-style: none;
        padding: 0;
    }
`;

export const FileItem = styled.li`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    &:nth-child(even) {
        background-color: #f1f1f1;
    }
    &:hover {
        background-color: #e9e9e9;
    }
    span {
        margin-left: auto;
        color: #555;
    }
`;

