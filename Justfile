# List available recipes
default:
    just --list

# Run project checks
check:
    echo "No checks configured yet"

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
