# Bard add-on for Statamic 6 for adding a span and class to selected content

![Statamic 6.0+](https://img.shields.io/badge/Statamic-6.0+-FF269E?style=for-the-badge&link=https://statamic.com)

This is an example Bard addon for Statamic 6 that adds a span with a class to selected content. In this example, you can
select from a number of Les Mills group fitness classes.

**This addon has been updated for Statamic 6**. 

It will no longer work on Statamic 3, 4 or 5. However,  
- for Statamic 3, use [1.x](https://github.com/martyf/les-mills-class-types/releases/tag/1.2) 
- for Statamic 4 or 5, use [2.x](https://github.com/martyf/les-mills-class-types/tree/2.x)

While this has a personal purpose for my own use, it also shows a simple working example of how to wrap selected content
with an element, and add a class. Something that does have many use cases beyond something as trivial as this example.

Personally, I'll use this package as is... but for others, it is a simple and working example of how to write your own
addon for Bard in Statamic.

## Installation

Install it via the composer command

```
composer require martyfriedel/les-mills-class-types
```

In your Bard editor instances (note, *not* the configuration view), you'll see the new button added.

Select some text, click the new icon, and select a class type, and voilà!

## Output

When output, the markup will be a span with a class attached.

```html
<p>This is my text with <span class="les-mills-class bodyattack">BodyAttack</span> highlighted using the addon.</p>
```


## Use on the front end

Styles have been included for a handful of programs (the ones I teach, funnily enough), and will style the selected text
within the Statamic administration area.

You will need to add classes to your front end stylesheets to see them come through there too.

Essentially it will add a generic class ``les-mills-class`` followed by the program name - so this way you can target
all class types, and then tweak per program.

A finished class might be ``les-mills-class bodyattack`` for example.

Your CSS for your frontend can then target that specific class.

```scss
.les-mills-class {
    text-transform: uppercase !important;
    font-weight: bold !important;

    &.bodyattack {
        color: #FCC500 !important;
    }
    
    /* more class types */
}
```

## License

This addon is licensed under the MIT license.

## Les Mils

Les Mills are an awesome company based on New Zealand, who make the best group fitness classes in the world, including
BODYPUMP - I've been trained in 5 of their programs, and teaching Les Mills group fitness classes for over 14 years.
Their "L" letter has been used for the button for this plugin purely for demonstration purposes.
