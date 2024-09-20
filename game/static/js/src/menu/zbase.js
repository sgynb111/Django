class AcGameMenu{
	constructor(root){
	this.root = root;
	this.$menu = $(`
<div class="ac-game-menu">
	<div class="ac-game-menu-field">
		<div class="ac-game-menu-field-item ac-game-menu-field-item-single">
		Single
		</div>
		<div class="ac-game-menu-field-item ac-game-menu-field-item-multi">
		Multi
		</div>
		<div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
		Settings
		</div>
	</div>
</div>
`);
	this.root.$ac_game.append(this.$menu);
	this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single');
	this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi');
	this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
	this.start();
	}

	start(){
		this.add_listening_events();
	}

	add_listening_events() {
		let outer = this;
		this.$single_mode.click(function(){
			outer.hide();
			outer.root.playground.show();
		});
		this.$multi_mode.click(function(){
			console.log("multi");
		});
		this.$settings.click(function(){
			console.log("setting");
		});
	}
	show(){
		this.$menu.show();
	}
	hide(){
		this.$menu.hide();
	}

}
