import './main.css';

// Atoms
import Avatar from './atoms/Avatar.svelte';
// import Button from './atoms/Button.svelte';
// import Input from './atoms/Input.svelte';
import ProgressBar from './atoms/ProgressBar.svelte';
import LanguageSelect from './atoms/LanguageSelect.svelte';

// Molecules
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

export {
  Avatar,
  Button,
  LanguageSelect,
  LoadingSpinner,
  Input,
  Label,
  Checkbox,
  ProgressBar,
  BottomNavigation,
  CredentialListEntry,
  ActionTemplate,
  DetailsTemplate
};

export * from './components/ui/sheet';
// export * from './components/ui/alert';
export * from './components/ui/alert-dialog';
export * from './components/ui/accordion';
