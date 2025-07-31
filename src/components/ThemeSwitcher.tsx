import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { setTheme, Theme } from '../redux/themeSlice';

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <select
      className="p-2 border rounded"
      value={theme}
      onChange={(e) => dispatch(setTheme(e.target.value as Theme))}
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default ThemeSwitcher;