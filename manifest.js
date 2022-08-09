const { DefineFunction, Manifest, Schema } = require('@slack/bolt'); // will be node module import

const ReverseFunction = DefineFunction({
  callback_id: 'reverse',
  title: 'Reverse',
  description: 'Takes a string and reverses it',
  source_file: 'functions/reverse.ts',
  input_parameters: {
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: 'The string to reverse',
      },
    },
    required: ['stringToReverse'],
  },
  output_parameters: {
    properties: {
      reverseString: {
        type: Schema.types.string,
        description: 'The string in reverse',
      },
    },
    required: ['reverseString'],
  },
});

module.exports = Manifest({
  runOnSlack: false,
  name: 'BUG REPRO APP AUG 9 2022',
  displayName: 'BUG REPRO APP AUG 9 2022',
  description: 'Testing',
  longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque sed nibh efficitur fermentum et nec est. Pellentesque pulvinar leo purus, sit amet aliquam libero gravida vel. Vestibulum justo augue, elementum sit amet dignissim eget, porttitor id urna. Phasellus non nibh at tortor facilisis gravida et nec ex. Suspendisse potenti.',
  botScopes: ['channels:history', 'chat:write', 'commands'],
  tokenManagementEnabled: true,
  socketModeEnabled: true,
  functions: [ReverseFunction],
  features: {
    appHome: {
      homeTabEnabled: true,
      messagesTabEnabled: false,
      messagesTabReadOnlyEnabled: true,
    },
    botUser: {
      always_online: false,
    },
    shortcuts: [{
      name: '1.0 SAMPLE SHORTCUT',
      type: 'global',
      callback_id: 'sample_shortcut_id',
      description: 'This is a 1.0 shortcut',
    }],
    slashCommands: [{
      command: '/sleepy-command',
      description: 'Runs a sample command',
      should_escape: false,
    }],
  },
  settings: {
    interactivity: {
      is_enabled: true,
    },
    org_deploy_enabled: false,
  },
  eventSubscriptions: { bot_events: ['app_home_opened', 'message.channels'] },
  tokenRotationEnabled: false,
});
