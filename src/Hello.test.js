import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Hello from './Hello';
import {MemoryRouter, useNavigate} from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

test('renders component with correct content', () => {
    render(
        <MemoryRouter>
            <Hello />
        </MemoryRouter>
    );
    expect(screen.getByText("Select an Employee")).toBeInTheDocument();
    expect(screen.getByText("Or Make a new Employee")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getAllByRole("button", {text: "Submit"})).toHaveLength(2);
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("role")).toBeInTheDocument();
});

test('it submits form on submit', async () => {
    render(
        <MemoryRouter>
            <Hello />
        </MemoryRouter>
    );
    const inputName = screen.getByPlaceholderText("name"),
          inputRole = screen.getByPlaceholderText("role"),
          submitBtn = screen.getAllByRole("button");
    await userEvent.type(inputName, "Gandolf");
    await userEvent.type(inputRole, "Wizard");
    expect(inputName).toHaveValue("Gandolf");
    expect(inputRole).toHaveValue("Wizard");
    userEvent.click(submitBtn[0]);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/home');
});