import React from 'react'
import { Button } from 'react-native'

type btnProps = {
  btnName: any;
}

export default function CommonButton({ btnName }: btnProps) {
  return (
    <Button
      title={btnName} />
  )
}