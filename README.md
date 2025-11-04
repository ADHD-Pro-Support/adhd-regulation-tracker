---
canonical: "<Notion URL of the SoT record>"
---

# ADHD Regulation Tracker

Standalone ADHD Regulation Tracker app (Pop-Up Cafe MVP)
Autopilot Test: This is a safe change to test our CI workflow.

## Linting

This project uses ESLint with the Next.js and accessibility presets.

### To lint the codebase:
```sh
npm ci
npx eslint . --ext .js,.jsx,.ts,.tsx
```

- See [.eslintrc.json](./.eslintrc.json) for rules.
- GitHub Actions runs lint checks on PRs and pushes.

### Troubleshooting

- If lint fails, run the above commands locally and fix issues.
- If you add new dependencies, re-run `npm ci`.

## DoD Checklist for PRs

- [ ] No secrets or tokens present/echoed.
- [ ] Only commits when config changes.
- [ ] Reasonable ESLint defaults.
- [ ] Docs/README updated to mention linting.
- [ ] .gitignore includes node_modules, .env, .venv.
- [ ] Lint workflow added/checked.
- [ ] If using TypeScript, config includes typescript-eslint.
- [ ] DoD & rollback steps listed.
