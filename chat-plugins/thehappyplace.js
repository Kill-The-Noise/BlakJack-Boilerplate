/**
* Gambling: Riddle of the Day Plugin
* This is a command that allows a room owner to set a brain killing "riddle" of the day.
* Others may broadcast this at any time to remind the room of such.
* Only works in a room with the id "gambling"
* Credits: The Almighty Lord Parasect
*/

exports.commands = {
	riddleoftheday: 'rotd',
	rotd: function (target, room, user) {
		if (room.id !== 'gambling') return this.sendReply("This command can only be used in the Gambling room.");
		if (!this.canBroadcast()) return;
		if (!target) {
			if (!room.quote) return this.sendReplyBox("The Riddle of the Day has not been set.");
			return this.sendReplyBox("The current <strong>'Riddle of the Day'</strong> is:<br />" + room.quote);
		}
		if (!this.can('declare', room)) return false;
		if (target === 'off' || target === 'disable' || target === 'reset') {
			if (!room.quote) return this.sendReply("The Riddle of the Day has already been reset.");
			room.quote = "";
			room.add("The Riddle of the Day was reset by " + Tools.escapeHTML(user.name) + ".");
			this.logModCommand(user.name + " has reset the Riddle of the Day.");
			return;
		}
		room.quote = Tools.escapeHTML(target);
		room.addRaw(
			'<div class="broadcast-green">' +
				"<p><strong>The 'Mind Bending Riddle of the Day' has been updated by " + Tools.escapeHTML(user.name) + ".</strong></p>" +
				"<p>Riddle: " + room.quote + '</p>' +
			'</div>'
		);
		this.logModCommand(Tools.escapeHTML(user.name) + " has updated the riddle of the day to: " + room.quote);
	}
};
