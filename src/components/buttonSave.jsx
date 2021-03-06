import React, { useContext } from 'react';
import context from '../utils/context';

function ButtonSave() {

  const {
    setTime,
    setMessage,
    setBreakTimeState,
    setReset,
    initialTime,
    runningMessage,
  } = useContext(context)

  const clickSave = () => {
    setTime(initialTime)
    setMessage(runningMessage)
    setBreakTimeState(false)
    setReset(true)
    new Audio('./click.mp3').play()
  }

  return (
    <>
      <button
      className='button'
      onClick={ clickSave }
      >
      Salvar
      </button>
    </>
  );
}

export default ButtonSave;
