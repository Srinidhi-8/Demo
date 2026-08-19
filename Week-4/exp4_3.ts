class Locker<T> {
    private contents: T;

    constructor(initialItem: T) {
        this.contents = initialItem;
    }

    public getItem(): T {
        console.log("Accessing locker...");
        return this.contents;
    }

    public depositItem(newItem: T): void {
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}

// Number Locker
const cashLocker = new Locker<number>(5000);
let cash = cashLocker.getItem();

console.log(`Current Balance: ₹${cash}`);

// String Locker
const documentLocker = new Locker<string>("Property Papers - Mumbai Flat");

console.log(`Stored Document: ${documentLocker.getItem()}`);

// Gold Interface
interface Gold {
    weightGrams: number;
    purity: string;
}

// Gold Locker
const goldLocker = new Locker<Gold>({
    weightGrams: 60,
    purity: "24k"
});

const myGold = goldLocker.getItem();

console.log(`Gold Weight: ${myGold.weightGrams}g`);
console.log(`Gold Purity: ${myGold.purity}`);
