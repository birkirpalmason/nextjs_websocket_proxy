import { useEffect, useState } from 'react'

export default function Home() {
  useEffect(() => {
    if(typeof window ==='undefined') {return}
    const exampleSocket = new WebSocket(`ws://${location.host}/api/socket`);
    exampleSocket.onmessage = function (event) {
      console.log(event.data);
    }
    fetch(`http://${location.host}/api/foo`).then((r)=>r.text()).then((r)=>console.log(r))
  }, [])
  return (
  <div>websocket example</div>
  )
}


Home.getInitialProps = async (ctx) => { return {} }


