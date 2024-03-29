# TODOs
- [ ] fix pagination issues:
  - [ ] buttons 'prev' and 'next' should be disabled on the edges
  - [ ] each time we uses filtering it should reset last active page to 1
  - [ ] it should scroll upward once we change page
- [ ] create 'O'Clock Icon' for <TimeAgoBadge> component 
- [X] create <AdaptiveRender/> component that accepts other components and render them in different structures (in single- or in split- one) based on the device app is hosted
- [ ] fix useFetch() (or whatever, that sends request second time we visit our page)
- [ ] make app read PORT and hostname params out of environment (add environment variables for app)
- [ ] finish covering with tests
  - [ ] <App/> component
  - [ ] <AppHolder/> component (asynchronus logic)
  - [ ] Posts.slice fetchPostsAmount() async thunk
    - [ ] fetchPostsAmount() async thunk (function itself)
  - [ ] Universal.slice redux reducer
    - [ ] fetchUniversalBrands() async thunk
    - [ ] fetchUniversalCities() async thunk
    - [ ] fetchUniversalColorSchemas() async thunk
    - [ ] fetchUniversalCompanies() async thunk
    - [ ] fetchUniversalCountries() async thunk
    - [ ] fetchUniversalCurrency() async thunk
    - [ ] fetchUniversalExchangeRates() async thunk
    - [ ] fetchUniversalFamilyStatuses() async thunk
    - [ ] fetchUniversalGenders() async thunk
    - [ ] fetchUniversalLanguages() async thunk
    - [ ] fetchUniversalMeasureUnits() async thunk
    - [ ] fetchUniversalPackingMaterials() async thunk
    - [ ] fetchUniversalPaymentTypes() async thunk
  - [ ] useMathMedia() hook
  - [ ] useFetch() hook
  - [ ] usePagination() hook
  - [ ] useTimeout() hook
  - [ ] useDebounce() hook
  - [ ] useUpdateEffect() hook
  - [ ] useFilter() hook
  - [ ] useInput() hook: test case of changing value
  - [ ] fetchData() lib function
  - [ ] API classes
    - [ ] Controller API class
    - [ ] PagesService API class
    - [ ] PostsService API class