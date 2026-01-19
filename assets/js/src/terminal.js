
document.addEventListener('DOMContentLoaded', function() {
    const terminalInput = document.querySelector('.terminal');

    if (terminalInput) {
        terminalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const command = terminalInput.textContent.trim();
                const output = document.createElement('div');
                output.classList.add('terminal-output');

                if (command) {
                    const response = executeCommand(command);
                    output.innerHTML = response;
                    terminalInput.parentElement.parentElement.appendChild(output);
                }

                terminalInput.textContent = '\u00a0';
            }
        });
    }

    function executeCommand(command) {
        const args = command.split(' ');
        const cmd = args[0].toLowerCase();
        const rest = args.slice(1).join(' ');

        switch (cmd) {
            case 'echo':
                return rest;
            case 'help':
                return 'Available commands: echo, help, clear, fortune, ls, pwd, whoami, date, uname, sudo';
            case 'clear':
                document.querySelectorAll('.terminal-output').forEach(el => el.remove());
                return '';
            case 'fortune':
                const fortunes = [
                    "You will be hungry again in one hour.",
                    "A foolish man listens to his heart. A wise man listens to cookies.",
                    "An alien of some sort will be appearing to you shortly.",
                    "Do not mistake temptation for opportunity.",
                    "He who laughs at himself never runs out of things to laugh at.",
                    "Some men dream of fortunes, others dream of cookies.",
                ];
                return fortunes[Math.floor(Math.random() * fortunes.length)];
            case 'ls':
                return 'README.md  posts  images';
            case 'pwd':
                return '/home/barbuk';
            case 'whoami':
                return 'barbuk';
            case 'date':
                return new Date().toString();
            case 'uname':
                return 'Linux barbuk 6.17.4-2';
            case 'sudo':
                return 'User not in the sudoers file. This incident will be reported.';
            default:
                return `command not found: ${cmd}`;
        }
    }
});
