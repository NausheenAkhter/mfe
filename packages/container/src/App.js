import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/progress'
const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const MarketingLazy = lazy(() => 
  import('./components/MarketingApp')
)

const AuthLazy = lazy(() => 
  import('./components/AuthApp')
)

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path='/auth' component={AuthLazy} />
              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
};
