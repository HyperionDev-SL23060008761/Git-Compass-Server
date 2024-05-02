//Setup the Rate Limit Class
export class RateLimit {
	//List of Addresses in the Cache
	private addresses: { [ip: string]: { lastRequest: number } } = {};
	private minTimeBetweenRequests: number = 100;

	//Checks whether the API is Rate Limited
	public isRateLimited(ip: string): boolean {
		//Find the Address in the Cache
		const address = this.findAddress(ip);

		//Get the Current Date
		const currentTimestamp = new Date().getTime();

		//Get the Last Request Timestamp
		const lastRequestTimestamp = address ? address.lastRequest : 0;

		//Check if the Address Exists and Update the Last Request Timestamp
		if (address) address.lastRequest = currentTimestamp;

		//Add the Address to the Cache if it does not Exist
		if (!address) this.addAddress(ip);

		//Return the Status as not Rate Limited
		return currentTimestamp - lastRequestTimestamp < this.minTimeBetweenRequests;
	}

	//Adds an Address to the Cache
	private addAddress(ip: string): void {
		//Add the User to the Cache
		this.addresses[ip] = { lastRequest: new Date().getTime() };

		//Setup the Timeout to Remove the User from the Cache
		setTimeout(() => {
			delete this.addresses[ip];
		}, 1000 * 60 * 60);
	}

	//Finds an Address in the Cache
	private findAddress(ip: string): { lastRequest: number } | undefined {
		//Find the Address in the Cache
		const address = this.addresses[ip];

		//Return the address if it Exists
		return address;
	}
}
