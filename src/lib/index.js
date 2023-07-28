import './main.css';

// Atoms
import Avatar from './atoms/Avatar.svelte';
// import Button from './atoms/Button.svelte';
// import Input from './atoms/Input.svelte';
import ProgressBar from './atoms/ProgressBar.svelte';
import LanguageSelect from './atoms/LanguageSelect.svelte';
import Select from './atoms/Select.svelte';

// Molecules
import ActivityTabs from './molecules/ActivityTabs.svelte';
import TopNavigation from './molecules/TopNavigation.svelte';
import BottomNavigation from './molecules/BottomNavigation.svelte';
import CredentialListEntry from './molecules/CredentialListEntry.svelte';

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
import MeltUiTabs from './melt-ui/Tabs.svelte';

export {
  Avatar,
  Button,
  LanguageSelect,
  Select,
  ActivityTabs,
  MeltUiSelect,
  MeltUiTabs,
  LoadingSpinner,
  Input,
  Label,
  Checkbox,
  ProgressBar,
  TopNavigation,
  BottomNavigation,
  CredentialListEntry,
  ActionTemplate,
  DetailsTemplate
};

export * from './components/ui/tabs';
export * from './components/ui/sheet';
// export * from './components/ui/alert';
export * from './components/ui/alert-dialog';
export * from './components/ui/accordion';
