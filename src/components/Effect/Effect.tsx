import { useState, useEffect } from 'react';

export function Effect() {
  const [data, setData] = useState<any[]>([]);

  // Este hook se usa para comunicarnos entidades externas al componente (operaciones async, parametros de entrada y sync con entidades externas)
  // Se pueden usar varios sin ningun problema
  useEffect(() => {
    //1. Esta parte se ejecuta cuando se monta el componente
    //2. Y cada vez que se cambie algunos de los valores del arreglo de dependencias
    return ()=>{/* 3. Esta lógica se ejecuta al eliminar el componente */}
  }, [/* Aqui van las dependencias */]);
  return <></>
}
