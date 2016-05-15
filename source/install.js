import shell from 'shelljs';

export default function install (packageName) {
	console.log(`installing ${packageName}`);
	shell.exec(`npm install smartflat-${packageName}`);
}
