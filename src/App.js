import React from 'react'
import {
  RouterProvider,
} from "react-router-dom"

import 'semantic-ui-css/semantic.min.css'

import { SubstrateContextProvider } from './substrate-lib'
import router from './routes'

export default function App() {
  return (
    <SubstrateContextProvider>
      <RouterProvider router={router} />
    </SubstrateContextProvider>
  )
}
