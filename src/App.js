import { jsx as _jsx } from "react/jsx-runtime";
import { Layout } from '@/components/ui/layout/layout.tsx';
import { Router } from '@/router.tsx';
import { Provider } from 'react-redux';
import { store } from '@/services/store.ts';
function App() {
    return (_jsx(Provider, { store: store, children: _jsx(Layout, { children: _jsx(Router, {}) }) }));
}
export default App;
