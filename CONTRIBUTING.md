# Welcome!

We are so glad you're thinking about contributing to the project! If you're unsure about something, please don't hesitate to ask us.

<!-- We want to ensure a welcoming environment for all the different repositories. Please follow the [Code of Conduct](../CODE_OF_CONDUCT.md).

We encourage you to read the [License](../LICENSE) and the [Readme](../README.md). -->

## How to Contribute

1. Join the chat room @ https://gitter.im/FCCVienna/ReactRoom
1. Send my your username, full name or email address of your Github Account
1. We will add you to the organization
1. git clone <url> the repository
1. git checkout -b <nameOfYourBranch>
1. Write code
1. git add . (to add all your new files)
1. git commit -m "<yourMessage>" (add a message to your commit)
1. git push origin <yourBranch>

### Project Architecture

We follow the [clean architecture style](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) and structure the codebase accordingly.

![cleanArchitecture image](https://cdn-images-1.medium.com/max/1600/1*B7LkQDyDqLN3rRSrNYkETA.jpeg)

_Image credit to [Uncle Bob](https://8thlight.com/blog/uncle-bob/)_

Most important rule:

> Source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

### Git workflow

Currently we use an adapted version of [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). We are currently not using the develop branch as the project structure does not require it. Everything else is the same.

![gitflow image](https://www.bluesource.at/fileadmin/user_upload/bluesource/Wissen/Detailseite/git-model.jpg)

_Image credit to [nvie.com](https://nvie.com/posts/a-successful-git-branching-model/)_

### Issues / Pull Request

We have created templates for issues and pull requests to ensure a coherent workflow.

As a general rule, always make sure that:

- you are formatting your code
- you are linting your code
- all tests pass

We have several integration tools hooked up for reviewing pull requests. Make sure that those tests are also passing, and if not provide a detailed explanation why not and why it is not necessary to comply.