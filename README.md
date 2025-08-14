## AutomatedPros-test

## Requirements

| Tech |  Version   |
| :--: | :--------: |
| node | `v20.10.0` |
| npm  |  `10.2.3`  |

## Technologies Used

- **React 19**
- **TypeScript**
- **Next.js 15.3.5**
- **MUI ^7.3.1**

## Setup

1.- Clone the repo and install deps: `git clone repo_url && npm install`

2.- Install deps: `npm install`

3- Create a `.env.local` in the root folder of this project, and copy and paste the `env` that was shared in the email.

4.- Run the app: `npm run dev`

## GitFlow

for purpose of this assessment a single branch was used through out development

| Branch | Environment |
| :----: | :---------: |
| `main` |             |

for commit messages: for bug & updates fixes = patch: what-was-fixed
for new features = feat or misc: what-was-implemented

## Folder Structure

This project follows a **Feature-Based Structure**, which combines the organization of code by features with the encapsulation of components and their related files. This structure promotes modularity, reusability, and maintainability, making it suitable for large-scale applications.

### app/

- **`app/`**: Contains feature-specific directories.
  - **`users/`**: Example feature directory - if there as to be, but in this case no.
    - **`page.tsx`**: The main page component for the feature, which imports and renders the feature's components.

### features/

- **`features/`**: Contains common, reusable components used across multiple features.
  - **`characters/`**: Directory for users components. .
    - **`index.tsx`**: Example of a common component directory.

### components/

- **`components/`**: Directory for common components.
  - **`button/`**: Example of a common component directory.
    - **`index.tsx`**: The component's logic.

**Code example: app/dashboard/page.tsx**

```js
import React from "react";
import { Characters } from "@/src/features";

export default function Home() {
  return (
    <div>
      <Characters />
    </div>
  );
}
```
