/* 06/11/18 Homework
-SETUP-
JKs-MacBook-Pro:hw1-terminal-loops JK$ pwd
/Users/JK/funky-ducks/06_11_2018_command_line/hw1-terminal-loops
JKs-MacBook-Pro:hw1-terminal-loops JK$ touch index.html
JKs-MacBook-Pro:hw1-terminal-loops JK$ mkdir js
JKs-MacBook-Pro:hw1-terminal-loops JK$ ls
README.md	index.html	js
JKs-MacBook-Pro:hw1-terminal-loops JK$ mkdir css
JKs-MacBook-Pro:hw1-terminal-loops JK$ ls
README.md	css		index.html	js
JKs-MacBook-Pro:hw1-terminal-loops JK$ cd css
JKs-MacBook-Pro:css JK$ touch style.css
JKs-MacBook-Pro:css JK$ ls
style.css
JKs-MacBook-Pro:css JK$ cd ..
JKs-MacBook-Pro:hw1-terminal-loops JK$ cd js/touch main.js
-bash: cd: js/touch: No such file or directory
JKs-MacBook-Pro:hw1-terminal-loops JK$ cd js
JKs-MacBook-Pro:js JK$ ls
JKs-MacBook-Pro:js JK$ touch main.js
JKs-MacBook-Pro:js JK$ subl .
JKs-MacBook-Pro:js JK$ ls
main.js
JKs-MacBook-Pro:js JK$ cd ..
JKs-MacBook-Pro:hw1-terminal-loops JK$ subl .
JKs-MacBook-Pro:hw1-terminal-loops JK$ tree
.
├── README.md
├── css
│   └── style.css
├── index.html
└── js
    └── main.js

2 directories, 4 files
JKs-MacBook-Pro:hw1-terminal-loops JK$ 
JKs-MacBook-Pro:hw1-terminal-loops JK$ cd js
JKs-MacBook-Pro:js JK$ ls
main.js
JKs-MacBook-Pro:js JK$ mv main.js/ app.js
mv: rename main.js/ to app.js: Not a directory
JKs-MacBook-Pro:js JK$ mv main.js app.js
JKs-MacBook-Pro:js JK$

-Sections 1- 
1. cancatenation is when you add two stings together using ( " " + " ")
example ("i'm a phrase " + "i'm the end of a phrase.")
interpolation is when you use variables to represent the strings.
example var name = "jared";
			console.log(`${name} is the coolest!`)  
2. DRY stands for "don't repeat yourself". 
Through functions and loops we can simplify 
our code that we use over and over and thus save time 
and work more efficiently. 
*/
// -Section 2-
// -Boolean expressions-

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('name' === 'name');
console.log(a + b === c);
console.log(a < a + d);
console.log(e === 'Kevin');
console.log(48 !== '48');

// -Section 3-
// -loops-

// yes because its always true
// The loop will run once because the variable is changed to false at the end.

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

// since the operator is after there will be one extra since it wont show the 
// the first time "A" so 21 (it ran 21 times)

// section 4 - 
// a while loop will repeat until the test condition is false.
// a for loop is used more for iterating something in an array a certain number of times


for (var i = 0; i < 999; i++) {
  console.log(i);
}

// For Loop Control Statement

// first part of the loop is initialization or where it starts from, the second
//  is the condition that lets the statement run until the condition is false,
//  and the final expression is the rate at which the statement is carried out.

for (var i = 999; i >= 0; i--) {
	console.log(i);
}


for (var i = 1; i =< 10; i += 1) {
	console.log("the value of i is: " + i + "of 10");
}



/*
-section 5 -
Last login: Mon Jun 11 14:37:02 on ttys000
JKs-MacBook-Pro:~ JK$ ls
Applications		Movies			eclipse
Desktop			Music			eclipse-workspace
Documents		Pictures		funky-ducks
Downloads		Public
Library			Terminal
JKs-MacBook-Pro:~ JK$ cd funky-ducks/
JKs-MacBook-Pro:funky-ducks JK$ ls
06_11_2018_command_line	labs			test1
exercise		terminal_practice
JKs-MacBook-Pro:funky-ducks JK$ cd 06_11_2018_command_line/
JKs-MacBook-Pro:06_11_2018_command_line JK$ mkdir homework_part2
JKs-MacBook-Pro:06_11_2018_command_line JK$ ls
Commandline and folder structure.rtf	hw1-terminal-loops
file_structure_hello_world		labyrinth
homework_part2
JKs-MacBook-Pro:06_11_2018_command_line JK$ cd homework_part2/
JKs-MacBook-Pro:homework_part2 JK$ mkdir death_star/darth_vadar.txt
mkdir: death_star: No such file or directory
JKs-MacBook-Pro:homework_part2 JK$ mkdir deat_star
JKs-MacBook-Pro:homework_part2 JK$ cd deat_star/
JKs-MacBook-Pro:deat_star JK$ touch darth_vadar.txt
JKs-MacBook-Pro:deat_star JK$ touch princess_leia.txt storm_trooper.txt
JKs-MacBook-Pro:deat_star JK$ ls
darth_vadar.txt		princess_leia.txt	storm_trooper.txt
JKs-MacBook-Pro:deat_star JK$ cd..
-bash: cd..: command not found
JKs-MacBook-Pro:deat_star JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ cd ..
JKs-MacBook-Pro:06_11_2018_command_line JK$ ls
Commandline and folder structure.rtf	hw1-terminal-loops
file_structure_hello_world		labyrinth
homework_part2
JKs-MacBook-Pro:06_11_2018_command_line JK$ cd homework_part2/
JKs-MacBook-Pro:homework_part2 JK$ mkdir tatooine
JKs-MacBook-Pro:homework_part2 JK$ cd tatooine/
JKs-MacBook-Pro:tatooine JK$ touch luke.txt ben_kanobi.txt
JKs-MacBook-Pro:tatooine JK$ ls
ben_kanobi.txt	luke.txt
JKs-MacBook-Pro:tatooine JK$ mkdir millenium_falcon
JKs-MacBook-Pro:tatooine JK$ cd millenium_falcon/
JKs-MacBook-Pro:millenium_falcon JK$ touch han_solo.txt
JKs-MacBook-Pro:millenium_falcon JK$ cd ..
JKs-MacBook-Pro:tatooine JK$ ls
ben_kanobi.txt		luke.txt		millenium_falcon
JKs-MacBook-Pro:tatooine JK$ mv ben_kanobi.txt obi_wan.txt
JKs-MacBook-Pro:tatooine JK$ ls
luke.txt		millenium_falcon	obi_wan.txt
JKs-MacBook-Pro:tatooine JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ ls
deat_star	tatooine
JKs-MacBook-Pro:homework_part2 JK$ cd deat_star/
JKs-MacBook-Pro:deat_star JK$ cp storm_trooper.txt ../tatooine/
JKs-MacBook-Pro:deat_star JK$ ls
darth_vadar.txt		princess_leia.txt	storm_trooper.txt
JKs-MacBook-Pro:deat_star JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ cd tatooine/
JKs-MacBook-Pro:tatooine JK$ ls
luke.txt		obi_wan.txt
millenium_falcon	storm_trooper.txt
JKs-MacBook-Pro:tatooine JK$ ls
luke.txt		obi_wan.txt
millenium_falcon	storm_trooper.txt
JKs-MacBook-Pro:tatooine JK$ mv luke.txt millenium_falcon/
JKs-MacBook-Pro:tatooine JK$ ls
millenium_falcon	obi_wan.txt		storm_trooper.txt
JKs-MacBook-Pro:tatooine JK$ mv obi_wan.txt millenium_falcon/
JKs-MacBook-Pro:tatooine JK$ ls
millenium_falcon	storm_trooper.txt
JKs-MacBook-Pro:tatooine JK$ cd millenium_falcon/
JKs-MacBook-Pro:millenium_falcon JK$ ls
han_solo.txt	luke.txt	obi_wan.txt
JKs-MacBook-Pro:millenium_falcon JK$ cd ..
JKs-MacBook-Pro:tatooine JK$ mv millenium_falcon ..
JKs-MacBook-Pro:tatooine JK$ ls
storm_trooper.txt
JKs-MacBook-Pro:tatooine JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ ls
deat_star		millenium_falcon	tatooine
JKs-MacBook-Pro:homework_part2 JK$ mv millenium_falcon deat_star
JKs-MacBook-Pro:homework_part2 JK$ ls
deat_star	tatooine
JKs-MacBook-Pro:homework_part2 JK$ cd deat_star/
JKs-MacBook-Pro:deat_star JK$ mv princess_leia.txt millenium_falcon
JKs-MacBook-Pro:deat_star JK$ ls
darth_vadar.txt		millenium_falcon	storm_trooper.txt
JKs-MacBook-Pro:deat_star JK$ cd millenium_falcon/
JKs-MacBook-Pro:millenium_falcon JK$ rm obi_wan.txt 
JKs-MacBook-Pro:millenium_falcon JK$ ls
han_solo.txt		luke.txt		princess_leia.txt
JKs-MacBook-Pro:millenium_falcon JK$ cd ..
JKs-MacBook-Pro:deat_star JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ mkdir yavin_4
JKs-MacBook-Pro:homework_part2 JK$ cd deat_star/
JKs-MacBook-Pro:deat_star JK$ ls
darth_vadar.txt		millenium_falcon	storm_trooper.txt
JKs-MacBook-Pro:deat_star JK$ mv millenium_falcon ..
JKs-MacBook-Pro:deat_star JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ ls
deat_star		tatooine
millenium_falcon	yavin_4
JKs-MacBook-Pro:homework_part2 JK$ mv millenium_falcon yavin_4
JKs-MacBook-Pro:homework_part2 JK$ cd yavin_4/
JKs-MacBook-Pro:yavin_4 JK$ ls
millenium_falcon
JKs-MacBook-Pro:yavin_4 JK$ mkdir x_wing
JKs-MacBook-Pro:yavin_4 JK$ ls
millenium_falcon	x_wing
JKs-MacBook-Pro:yavin_4 JK$ cd millenium_falcon/
JKs-MacBook-Pro:millenium_falcon JK$ mv princess_leia.txt ..
JKs-MacBook-Pro:millenium_falcon JK$ mv luke.txt ../x_wing/
JKs-MacBook-Pro:millenium_falcon JK$ ls
han_solo.txt
JKs-MacBook-Pro:millenium_falcon JK$ cd ..
JKs-MacBook-Pro:yavin_4 JK$ ls
millenium_falcon	princess_leia.txt	x_wing
JKs-MacBook-Pro:yavin_4 JK$ cd x_wing/
JKs-MacBook-Pro:x_wing JK$ ls
luke.txt
JKs-MacBook-Pro:x_wing JK$ cd ..
JKs-MacBook-Pro:yavin_4 JK$ mv millenium_falcon ..
JKs-MacBook-Pro:yavin_4 JK$ ls
princess_leia.txt	x_wing
JKs-MacBook-Pro:yavin_4 JK$ mv x_wing ..
JKs-MacBook-Pro:yavin_4 JK$ ls
princess_leia.txt
JKs-MacBook-Pro:yavin_4 JK$ cd ../deat_star/
JKs-MacBook-Pro:deat_star JK$ mkdir tie_fighter_1 tie_fighter
JKs-MacBook-Pro:deat_star JK$ ls
darth_vadar.txt		tie_fighter
storm_trooper.txt	tie_fighter_1
JKs-MacBook-Pro:deat_star JK$ mkdir tie_fighter_2
JKs-MacBook-Pro:deat_star JK$ mv tie_fighter tie_fighter_3
JKs-MacBook-Pro:deat_star JK$ ls
darth_vadar.txt		tie_fighter_1		tie_fighter_3
storm_trooper.txt	tie_fighter_2
JKs-MacBook-Pro:deat_star JK$ mv darth_vadar.txt tie_fighter_1
JKs-MacBook-Pro:deat_star JK$ ls
storm_trooper.txt	tie_fighter_2
tie_fighter_1		tie_fighter_3
JKs-MacBook-Pro:deat_star JK$ cp storm_trooper.txt tie_fighter_2 tie_fighter_3
cp: tie_fighter_2 is a directory (not copied).
JKs-MacBook-Pro:deat_star JK$ cp storm_trooper.txt tie_fighter_2
JKs-MacBook-Pro:deat_star JK$ cp storm_trooper.txt tie_fighter_3
JKs-MacBook-Pro:deat_star JK$ mv tie_fighter_1 ..
JKs-MacBook-Pro:deat_star JK$ mv tie_fighter_2 ..
JKs-MacBook-Pro:deat_star JK$ mv tie_fighter_3 ..
JKs-MacBook-Pro:deat_star JK$ ls
storm_trooper.txt
JKs-MacBook-Pro:deat_star JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ ls
deat_star		tie_fighter_1		x_wing
millenium_falcon	tie_fighter_2		yavin_4
tatooine		tie_fighter_3
JKs-MacBook-Pro:homework_part2 JK$ rm -rf tie_fighter_2 tie_fighter_3
JKs-MacBook-Pro:homework_part2 JK$ ls
deat_star		tatooine		x_wing
millenium_falcon	tie_fighter_1		yavin_4
JKs-MacBook-Pro:homework_part2 JK$ cd x_wing/the_force.txt
-bash: cd: x_wing/the_force.txt: No such file or directory
JKs-MacBook-Pro:homework_part2 JK$ cd x_wing/
JKs-MacBook-Pro:x_wing JK$ touch the_force.txt
JKs-MacBook-Pro:x_wing JK$ pwd
/Users/JK/funky-ducks/06_11_2018_command_line/homework_part2/x_wing
JKs-MacBook-Pro:x_wing JK$ cd ..
JKs-MacBook-Pro:homework_part2 JK$ ls
deat_star		tatooine		x_wing
millenium_falcon	tie_fighter_1		yavin_4
JKs-MacBook-Pro:homework_part2 JK$ rm -r deat_star/
JKs-MacBook-Pro:homework_part2 JK$ ls
millenium_falcon	tie_fighter_1		yavin_4
tatooine		x_wing
JKs-MacBook-Pro:homework_part2 JK$ mv millenium_falcon yavin_4/
JKs-MacBook-Pro:homework_part2 JK$ mv x_wing yavin_4
JKs-MacBook-Pro:homework_part2 JK$ ls
tatooine	tie_fighter_1	yavin_4
JKs-MacBook-Pro:homework_part2 JK$ cd yavin_4/
JKs-MacBook-Pro:yavin_4 JK$ ls
millenium_falcon	princess_leia.txt	x_wing
JKs-MacBook-Pro:yavin_4 JK$ cd ../
JKs-MacBook-Pro:homework_part2 JK$ 
*/





JKs-MacBook-Pro:hw1-terminal-loops JK$ git add -A
JKs-MacBook-Pro:hw1-terminal-loops JK$ git commit -m "hw1_terminal-loops ect"
[master f123342] hw1_terminal-loops ect
 Committer: JK <JK@JKs-MacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 3 files changed, 335 insertions(+)
 create mode 100644 css/style.css
 create mode 100644 html/index.html
 create mode 100644 js/app.js
JKs-MacBook-Pro:hw1-terminal-loops JK$ git push origin master
Counting objects: 8, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (8/8), 2.81 KiB | 2.81 MiB/s, done.
Total 8 (delta 0), reused 0 (delta 0)
gTo https://github.com/jaredkranzler/hw1-terminal-loops.git
   729b7ea..f123342  master -> master
JKs-MacBook-Pro:hw1-terminal-loops JK$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
JKs-MacBook-Pro:hw1-terminal-loops JK$ 






