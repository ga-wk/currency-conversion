import { combineReducers } from 'redux'
import { currencyReducer } from './currency/currencyReducer'
import { defaultCurrencyReducer } from './defaultCurrency/defaultCurrencyReducer'

const rootReducer = combineReducers({
    currency: currencyReducer,
    defaultCurrency: defaultCurrencyReducer
})

export default rootReducer