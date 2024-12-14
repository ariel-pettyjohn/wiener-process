import { useEffect } from 'react'

export function useGUI({ gui, parameters, dispatch }) {
  const stepSizeController = gui.add(parameters, 'stepSize', 0.01, 1).name('Step Size')
  const maxPointsController = gui.add(parameters, 'maxPoints', 3, 50000, 1).name('Max Points')
  const constraintController = gui.add(parameters, 'constraint', ['spherical', 'cubical']).name('Constraint Type')

  useEffect(() => {
    stepSizeController.onChange((value) => dispatch({ type: 'UPDATE_STEP_SIZE', payload: value }))
    maxPointsController.onChange((value) => dispatch({ type: 'UPDATE_MAX_POINTS', payload: value }))
    constraintController.onChange((value) => dispatch({ type: 'UPDATE_CONSTRAINT', payload: value }))

    return () => gui.destroy()
  }, [parameters, dispatch])
}