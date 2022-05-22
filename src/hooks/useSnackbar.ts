import { Slide } from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'
import type { VariantType } from 'notistack'
import { useSnackbar as useSnackbarTmp } from 'notistack'
import type { ComponentType } from 'react'

export const useSnackbar = () => {
  const { enqueueSnackbar } = useSnackbarTmp()

  return (message: string, variant: VariantType, autoHideDuration?: number) =>
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      autoHideDuration: autoHideDuration || 2000,
      TransitionComponent: Slide as ComponentType<TransitionProps>
    })
}
