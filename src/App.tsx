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
          ref={register({ required: true, min: 18 })}
          id="age"
          name="age"
          type="number"
        />
        {errors.age?.type === 'required' && <small>Digite a idade</small>}
        {errors.age?.type === 'min' && (
          <small>Você deve ter pelo menos 18 anos.</small>
        )}
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default App;
