BlakJack Boilerplate
========================================================================

BlakJack Boilerplate is for BlakJack and works with kota's config.

Features
------------------------------------------------------------------------

* Single Process Hack for improve performance.
* Up-to-date with [Pokemon Showdown][1]'s latest features.
* Money (bucks) system for winning tournaments.
* Polls for voting
* Profile command to check to see when the user's last online, their money, etc.
* A bunch of useful commands like /away, /hide, /poof, etc.
* Built-in bot for moderation and fun
* Emoticons in chat

Getting Started
------------------------------------------------------------------------
To get started with this boilerplate, just download this as a zip or clone it and install a [Pokemon Showdown server][1] as you usually do.
If you forgot how to do this, here is a quick reference:

  git clone https://github.com/CreaturePhil/Showdown-Boilerplate.git showdown-boilerplate
  cd showdown-boilerplate
  npm install

Once you done that, create __usergroups.csv__, __about.csv__, __elo.csv__, __money.csv__, __lastSeen.csv__, and __tourWins.csv__ files in the _config_ folder.

To do this quickly in your terminal or command line:

On Windows:

  cd config
  Type NUL > usergroups.csv
  Type NUL > about.csv
  Type NUL > elo.csv
  Type NUL > money.csv
  Type NUL > lastSeen.csv
  Type NUL > tourWins.csv
  cd ..

On Linux or Mac:

  cd config
  touch usergroups.csv about.csv elo.csv money.csv lastSeen.csv tourWins.csv
  cd ..

`cd ..` is to go back to the showdown-boilerplate directory.
Once you get your server up and running, you can manage certain settings with the `/controlpanel` or `/cp` command.

![Control Panel](http://i.imgur.com/ImBbK5x.png "Control Panel")

License
------------------------------------------------------------------------

<<<<<<< HEAD
Pokémon Showdown's server is distributed under the terms of the [MIT License][7].
=======
Pokémon Showdown's server is distributed under the terms of the [MIT License][8].

  [8]: https://github.com/Zarel/Pokemon-Showdown/blob/master/LICENSE


Credits
------------------------------------------------------------------------

Owner

- Guangcong Luo [Zarel] - Development, Design

Staff

- Hugh Gordon [V4] - Research (game mechanics), Development
- Juanma Serrano [Joim] - Development
- Leonardo Julca [Slayer95] - Development
- [The Immortal] - Development

Retired Staff

- Bill Meltsner [bmelts] - Development
- Cathy J. Fitzpatrick [cathyjf] - Development
- Mathieu Dias-Martins [Marty-D] - Research (game mechanics), Development

Contributors
>>>>>>> upstream/master

  [7]: https://github.com/Zarel/Pokemon-Showdown/blob/master/LICENSE
