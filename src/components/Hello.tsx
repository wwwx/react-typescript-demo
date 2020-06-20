  import React from 'react'
  import useMousePosition from '../hooks/useMousePosition'
  interface IHelloProps {
      message?: string
  }

  const Hello: React.FC<IHelloProps> = (props) => {

  const position = useMousePosition();

      return (
      <h2>{props.message}  X: {position.x}, Y: {position.y}</h2>
      )
  }

  Hello.defaultProps = {
      message: 'Hello world;'
  }

  export default Hello