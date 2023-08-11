import './main.css';

// Atoms
import Avatar from './atoms/Avatar.svelte';
// import Button from './atoms/Button.svelte';
// import Input from './atoms/Input.svelte';
import ProgressBar from './atoms/ProgressBar.svelte';
import LanguageSelect from './atoms/LanguageSelect.svelte';
import Select from './atoms/Select.svelte';
import SearchInput from './atoms/Input.svelte';

// Molecules
import ActivityTabs from './molecules/ActivityTabs.svelte';
import TopNavigation from './molecules/TopNavigation.svelte';
import BottomNavBar from './molecules/navigation/BottomNavBar.svelte';
import CredentialListEntry from './molecules/CredentialListEntry.svelte';
import BottomDrawer from './molecules/dialogs/BottomDrawer.svelte';

// Templates
import ActionTemplate from './templates/ActionTemplate.svelte';
import DetailsTemplate from './templates/DetailsTemplate.svelte';

// shadcn-svelte
import { Button } from './components/ui/button/index';
import { Input } from './components/ui/input/index';
import { Label } from './components/ui/label/index';
import { Checkbox } from './components/ui/checkbox/index';

import { ThreeDotsFade as LoadingSpinner } from 'svelte-svg-spinners';

// Melt UI
import MeltUiSelect from './melt-ui/Select.svelte';
import MeltUiActivityTabs from './melt-ui/tabs/ActivityTabs.svelte';
import MeltUiConnectionTabs from './melt-ui/tabs/ConnectionTabs.svelte';

export {
  Avatar,
  SearchInput,
  Button,
  LanguageSelect,
  Select,
  ActivityTabs,
  MeltUiSelect,
  MeltUiActivityTabs,
  MeltUiConnectionTabs,
  LoadingSpinner,
  Input,
  Label,
  Checkbox,
  ProgressBar,
  TopNavigation,
  BottomNavBar,
  CredentialListEntry,
  ActionTemplate,
  DetailsTemplate,
  BottomDrawer,
};

export * from './components/ui/tabs';
export * from './components/ui/sheet';
// export * from './components/ui/alert';
export * from './components/ui/alert-dialog';
export * from './components/ui/accordion';
