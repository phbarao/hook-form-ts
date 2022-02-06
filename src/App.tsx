import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
}

const App = (): ReactElement => {
  const { register, handleSubmit, errors } = useForm<IProfile>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">Nome:</label>
        <input
          ref={register({ required: true })}
          id="firstName"
          name="firstName"
          type="text"
        />
        {errors.firstName && <small>Digite o nome.</small>}
      </div>

      <div>
        <label htmlFor="lastName">Sobrenome:</label>
        <input
          ref={register({ required: true })}
          id="lastName"
          name="lastName"
          type="text"
        />
        {errors.lastName && <small>Digite o sobrenome.</small>}
      </div>

      <div>
        <label htmlFor="age">Idade:</label>
        <input
          ref={register({ required: true })}
          id="age"
          name="age"
          type="number"
        />
        {errors.age && <small>Digite a idade</small>}
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default App;
