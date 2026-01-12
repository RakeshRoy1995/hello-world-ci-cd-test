#  Release versioning & tagging ci-cd-test
1. Semantic versioning ( v1.2.3 )
2. Automatic Git tags
3. GitHub Releases
4. Manual control
5. Rollback-friendly releases


main branch → CI passes → Manual release → Tag → GitHub Release

In Repo → Settings → Actions → General
Set Workflow permissions to:

✅ Read and write permissions
✅ Allow GitHub Actions to create tags/releases

One release = one tag

generate_release_notes: true
