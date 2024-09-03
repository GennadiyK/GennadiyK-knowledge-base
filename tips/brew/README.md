
<details>
  <summary>Remove node</summary>
  
  ```
    brew uninstall node; 
    # or `brew uninstall --force node` which removes all versions
    brew cleanup;
    rm -f /usr/local/bin/npm /usr/local/lib/dtrace/node.d;
    rm -rf ~/.npm;
  ``` 
  [Reference](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)

  :white_check_mark: Or remove manually using path that node istalled is.
</details>
<details>
  <summary>Install node</summary>

  ```
    brew uninstall node; 
    # or `brew uninstall --force node` which removes all versions
    brew cleanup;
    rm -f /usr/local/bin/npm /usr/local/lib/dtrace/node.d;
    rm -rf ~/.npm;
  ``` 
  [Reference](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)
</details>
<details>
  <summary>Unexpected method 'appcast' called on Cask cocoaspell.</summary>
  Issue appear duting the updating node.

  Fix:

  ```
    brew uninstall --cask adoptopenjdk8
    brew uninstall --cask adoptopenjdk11
    brew untap AdoptOpenJDK/openjdk

    brew install --cask temurin@8
    brew install --cask temurin@11
  ``` 
  [Reference](https://github.com/orgs/Homebrew/discussions/5373#discussioncomment-9513713)
</details>