new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    
    methods: {
        startGame: function(event) {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(event) {
            this.$_HeroAttack(3, 10);
            if(!this.$_CheckWin()) {
                this.$_MonsterAttack(5, 12);
                this.$_CheckWin();
            }
        },
        specialAttack: function(event) {
            this.$_HeroAttack(10, 20);
            if(!this.$_CheckWin()) {
                this.$_MonsterAttack(5, 12);
                this.$_CheckWin();
            }
        },
        heal: function(event) {
            this.$_HealTheHero(10);
            this.$_MonsterAttack(5, 12);
        },
        giveUp: function(event) {
            this.gameIsRunning = false;
        },
        $_HeroAttack: function(min, max) {
            let damage = this.$_CalculateDamage(min, max);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster for ${damage}`,
            });
        },
        $_MonsterAttack: function(min, max) {
            let damage = this.$_CalculateDamage(min, max);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`,
            });
        },
        $_HealTheHero: function(healValue) {
            if(this.playerHealth <= (100-healValue)) {
                this.playerHealth += healValue;
            } else {
                this.playerHealth = 100;
            }
        },
        $_CalculateDamage: function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        $_CheckWin: function() {
            if(this.playerHealth <= 0) {
                if(confirm("You've lost. New game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            } else if(this.monsterHealth <= 0) {
                if(confirm("You've won. New game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            
            return false;
        },
    },
    
    computed: {

    },
    
    watch: {

    },
});