# BarbUk

This is the personal website of BarbUk.

**Live Site:** [https://iam.barb.uk](https://iam.barb.uk)

## Technologies Used

This website is built with [Hugo](https://gohugo.io/) and uses the [Osprey Delight](https://github.com/barbUk/osprey-delight) theme.

## Running Locally

To run this website locally, clone the project, sync the theme submodule and run it with hugo 0.115:

```bash
docker run --rm --entrypoint hugo -p 1313:1313 -v "${PWD}":/src -v "${PWD}/hugo_cache":/tmp/hugo_cache hugomods/hugo:exts-0.115.4 server --bind 0.0.0.0
```

This will start a local development server, usually accessible at `http://localhost:1313`.
