# gatsby-contentful-netlify-multilocale

A Gatsby + Contentful + Netlify bolierplate multi-locale project.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project is a modified clone of [contentful-userland/gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter)

## 🧐 What's inside?

- A good starting point for a new production JAMstack site that has ...
  - `en-CA` and `fr-CA` pages
  - CI/CD pipeline and architecture using Netlify (a different CI platform can be bolted on)
  - A Content Management System (Contentful) with a `Production` and `Development` publishing environment
- Here's the deployed Production site: 🔗[https://multilocale-prod.netlify.com/](https://multilocale-dev.netlify.com/)
- Here's the deployed Development site: 🔗[https://multilocale-dev.netlify.com/](https://multilocale-dev.netlify.com/)

## 📢 Before you start

- I built this with these two languages in mind: `en-CA` and `fr-CA` because I am a Canadian developer.
  - Contentful sets your default Locale to `en-US`
  - I haven't tested this project in scenarios for any other languages other than `en-CA` and `fr-CA` but in theory you should be able to swap these out with whatever language Contentful supports
- Reach out to me on Twitter [@jasonrundell](https://twitter.com/jasonrundell) with your questions/issues or, of course, here on GitHoob

## ▶️ Let's begin!

### Create a Contentful account

Register or log in to your Contentful account. Contentful allows for [free accounts](https://www.contentful.com/sign-up/) with beefy enough rate limits for developing experiments or very low traffic sites.

### Contentful setup

1. Create a new space.

2. Select the preferred space type.

3. Name your space e.g. mysite.com and make sure the option for 'Create an empty space' is selected. Click the proceed to confirmation button.

4. Confirm and create space.

5. Navigate to Settings > General Settings and copy your space ID somewhere for use later.

6. Go to Settings > API keys and select the **Content management tokens** tab. Generate a personal token and save it somewhere safe. **!!!You can not retrieve this token at any point afterwards!!!** This token is used for Contentful API operations. Name it something appropriate but the name is not used for anything other than a visual reference from the Contentful UI.

7. Go to Settings > API keys and select the **Content delivery/preview tokens** tab. Click the **Add API key** button. Name your access token something appropriate (e.g. `mysite.com Production`). Description is optional. Make sure only `master` is checked in the Environments section. Save the changes. Copy down the **Content Delivery API - access token**. This key can be viewed at any time. This key will be used **only** for production builds.

8. Go to Settings > Locales and click on **English (United States)**. Change the Local to `English (Canada) (en-CA)` and Save. A modal will ask you to confirm by entering `en-US` into it and clicking the **Git it, change locale** button.

9. Go to Settings > Locales and **Add Locale**. Select `French (Canada) (fr-CA)` from the list, None (no fallback) for Fallback locale, and make sure all three options are checked (Enable this locale in response, Enable editing for this locale, Allow empty fields for this locale). Save your locale.

### Get the starter files

1. Installation with command line:

   ```bash
   git clone https://github.com/jasonrundell/gatsby-contentful-netlify-multilocale
   cd gatsby-contentful-netlify-multilocale
   yarn
   ```

### Import starter content into Contentful

Automate the setup of Contentful to get a project working right away!

Open a command window in your project's root folder and use the following command:

```bash
yarn setup
```

The `yarn setup` command will ask you for a space ID, and access tokens for Contentful Management (step 6 in Contentful setup), Delivery API (step 7 in Contentful setup), your Environment ID (use `master`) and then it will start to import the example content and content models (uses the json dump file `./contentful/export.json`) into your space. Finally, the script will write a `.env.development` and `.env.production` file for later use.

A successful import will output something similar to the following:

```bash
Writing config file...
Config file /Users/{user}/Documents/Github/jasonrundell/gatsby-contentful-multilocale/.env.development written
Config file /Users/{user}/Documents/Github/jasonrundell/gatsby-contentful-multilocale/.env.production written
┌──────────────────────────────────────────────────┐
│ The following entities are going to be imported: │
├─────────────────────────────────┬────────────────┤
│ Content Types                   │ 1              │
├─────────────────────────────────┼────────────────┤
│ Editor Interfaces               │ 1              │
├─────────────────────────────────┼────────────────┤
│ Entries                         │ 3              │
├─────────────────────────────────┼────────────────┤
│ Assets                          │ 7              │
├─────────────────────────────────┼────────────────┤
│ Locales                         │ 2              │
├─────────────────────────────────┼────────────────┤
│ Webhooks                        │ 0              │
└─────────────────────────────────┴────────────────┘
 ✔ Validating content-file
 ✔ Initialize client (1s)
 ✔ Checking if destination space already has any content and retrieving it (1s)
 ✔ Apply transformations to source data (1s)
 ✔ Push content to destination space
   ✔ Connecting to space (1s)
   ✔ Importing Locales (1s)
   ✔ Importing Content Types (4s)
   ✔ Publishing Content Types (1s)
   ✔ Importing Editor Interfaces (1s)
   ✔ Importing Assets (8s)
   ✔ Publishing Assets (3s)
   ✔ Archiving Assets (0s)
   ✔ Importing Content Entries (4s)
   ✔ Publishing Content Entries (2s)
   ✔ Archiving Entries (1s)
   ✔ Creating Web Hooks (0s)
Finished importing all data
┌───────────────────────┐
│ Imported entities     │
├───────────────────┬───┤
│ Locales           │ 2 │
├───────────────────┼───┤
│ Content Types     │ 1 │
├───────────────────┼───┤
│ Editor Interfaces │ 1 │
├───────────────────┼───┤
│ Assets            │ 7 │
├───────────────────┼───┤
│ Published Assets  │ 7 │
├───────────────────┼───┤
│ Archived Assets   │ 0 │
├───────────────────┼───┤
│ Entries           │ 3 │
├───────────────────┼───┤
│ Published Entries │ 3 │
├───────────────────┼───┤
│ Archived Entries  │ 0 │
├───────────────────┼───┤
│ Webhooks          │ 0 │
└───────────────────┴───┘
The import was successful.
All set! You can now run yarn run dev to see it in action.
```

You may see some rate limit messages - ignore these unless they actually stop the import process. The import script will do a good job of pausing to overcome these limits for you.

### Enable multiple locales

For an unknown reason (please let me know if you know why), importing content into Contentful that has multiple locales does not automatically enable the fields to show up when editing content in Contentful. Do the following to just one content item to enable `fr-CA` fields on all content:

1. Navigate to [https://app.contentful.com/spaces](https://app.contentful.com/spaces) and go to your space.

2. Go to Content in the top navigation and edit one of your new pages.

3. In the right side bar, click **Change**, check off French in the modal window and click Save.

### Set up your Development Contentful environment

1. Navigate to [https://app.contentful.com/spaces](https://app.contentful.com/spaces) and go to your space.

2. Settings > Environments and add a new environment named `develop`. This will make a copy of the content, models, and assets from `master` and become your development environment.

3. Go to Settings > API keys and select the **Content delivery/preview tokens** tab. Click the **Add API key** button. Name your access token something appropriate (e.g. `mysite.com Development`). Description is optional. Make sure only `develop` is checked in the Environments section. Save the changes. The keys in this access will be used **only** for development builds.

### Create a Netlify account

Register or log in to your Contentful account. Contentful allows for [free accounts](https://app.netlify.com/signup) with beefy enough rate limits for developing experiments. It's a CDN so it can handle and scale for a lot of web traffic!

### Netlify PRODUCTION setup

1. Create a new site from Git.

2. Select GitHub/GitLab/Bitbucket.

3. This step will vary depending on how you configure Netlify's permissions with your Git platform of choice, but you need to target your git repo.

4. Set your **owner**.

5. Set **Branch to deploy** to `master`.

6. Set **Build command** to `gatsby build`.

7. Set **Publish directory** to `public/`.

8. Click **Show advanced** and set the following variables:

   - Key: CONTENTFUL_SPACE_ID,
     Value: `your_space_id`
   - Key: CONTENTFUL_ACCESS_TOKEN,
     Value: `your_production_delivery_api_key`
   - Key: CONTENTFUL_ENVIRONMENT_ID,
     Value: `master`
   - Key: ENV,
     Value: `production`

9. Click **Deploy site**

   Netlify will then begin running a build of your site and deploy it (if it succeeds). If the build fails, take a look at your deploy log. Your git repo's `master` branch may not be ina ready state, or perhaps you copied the wrong key into one of the Netlify variables from step 8 of Netlify setup.

10. Go to Site settings.

11. Under **Site information**, change the site name from the random name Netlify assign you, to something that makes sense and can be identified quickly, e.g. `mysite-prod.netlify.com` (note that the subdomain you choose might not be available). This subdomain can easily be changed later and is more of a stub for DNS changes that would be normal for a real production site, but those instructions are not covered in this document.

### Netlify app setup in Contentful for PRODUCTION

1. Go back to Contentful [https://app.contentful.com/spaces/](https://app.contentful.com/spaces/).

2. Select your `mysite.com` space.

3. Go to Apps in the top navigation.

4. Click on Netlify from the list.

5. Click **Install**

   This app will bring the following functionality into Contentful for you when publishing content across your environments:

   - triggers Netlify builds with a simple click in the sidebar
   - displays build status so editors don’t preview outdated sites
   - brings Netlify functionality into the Contentful web app
   - makes it possible to configure on a per-content-type level

6. On the **Connect Netlify** screen, click **Connect Account**.

7. Authorize.

8. Set **Netlify site** to the Netlify site you made (e.g. `mysite-prod`).

9. Set **Display name** to something appropriate for publishers to recognise as the Production site, e.g. `Production`. This name can be changed at any point later.

10. Under **Content types** check off **Select all**.

11. Click **Install** (blue button in the top right of the UI).

You will return later to add the Development site.

### Git setup for DEVELOPMENT

We've set up our Production pipeline. In order to create our Development pipeline, we need to create a branch in our Git repo.

**❗️NOTE:** This branch/pipeline can be named many different things by many different teams. It's been known to be called "UAT", "Pre-prod", "Perf", "Preview", and "Staging". Call it what you want, it's purpose is to serve as a mirror of Production because you want to see changes _before_ they go to Production.

Use your preferred method of creating a branch off of your `master`, but here is an example command line:

```bash
git checkout master
git branch develop
git checkout develop
git push origin develop
```

**💡TIP:** It's good to add branch protection to `develop` so that it can't be deleted accidentally.

### Netlify setup for DEVELOPMENT

Follow the same instructions from **Netlify PRODUCTION setup** with the following differences:

- Set **Branch to deploy** to `develop`.

- Click **Show advanced** and set the following variables:

  - Key: CONTENTFUL_SPACE_ID,
    Value: `your_space_id`
  - Key: CONTENTFUL_ACCESS_TOKEN,
    Value: `your_develop_delivery_api_key`
  - Key: CONTENTFUL_ENVIRONMENT_ID,
    Value: `develop`
  - Key: ENV,
    Value: `development`

- Under **Site settings** > **Site information**, change the site name from the random name Netlify assign you, to something that makes sense and can be identified quickly, e.g. `mysite-dev.netlify.com`.

### Netlify app setup in Contentful for DEVELOPMENT

Follow the same instructions from **Netlify app setup in Contentful for PRODUCTION** with the following differences:

- Set **Netlify site** to the Netlify site you made (e.g. `mysite-dev`).

- Set **Display name** to something appropriate for publishers to recognise as the Development site, e.g. `Development`. This name can be changed at any point later.

## 🎉 Congrats!

Your Production and Development pipelines are now finished and you can begin customizing to your heart's delight! 💖

## 🚀 Launching the site locally

You can run the following to view you site and begin publishing:

```bash
yarn start
```

## Credits

- Credit to [rxaviers](https://gist.github.com/rxaviers/7360908) for the gist of emojis.
- Stefan Judis and all the contributors for the [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter) repo.
- [Contentful](https://www.contentful.com/) and [Netlify](https://www.netlify.com/) for empowering developers with their free tiers!
- [Gatsby](https://www.gatsbyjs.org/) for a fantastic framework that 'helps developers build blazing fast websites and apps'.
