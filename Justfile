# List available recipes
default:
    just --list

# Run the dev server
dev:
    npm run dev

# Build the static site
build:
    npm run build

# Preview the production build locally
preview:
    npm run preview

# Canonical validation command. Currently a build only; will grow to
# include astro check, linting, and tests as those gates are introduced.
check:
    npm run build

# Create a new worktree
wt-add *args:
    workmux add {{args}}

# Remove a worktree
wt-rm *args:
    workmux remove {{args}}

# List worktrees
wt-ls:
    workmux list

# Open workmux dashboard
wt-dashboard:
    workmux dashboard
