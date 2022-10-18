import Template from '../../generic/templates/template'

/**
 * The simplest messages for agent only are made of text.
 * 
 * @category Generic
 * 
 * @property {string} text - Text to show
 * @example
 * const text = new AgentText('Want a free soda?')
 * text.addQuickReply(new QuickReply({
 *   label: 'Yes',
 *   value: 'yes'
 * }))
 * text.addQuickReply(new QuickReply({
 *   label: 'No',
 *   value: 'no'
 * }))
 **/
class AgentText extends Template {

    /**
     * @param {string} opts.text - Required
     **/
    constructor(opts) {
        super()

        let text = opts
        if (typeof text === 'object') {
            text = opts.text
        }

        if (typeof text !== 'string' || !text.length) {
            throw new Error('Text is mandatory')
        }

        this.text = text
    }

    toJSON() {
        const {
            text,
            quickReplies,
            delay,
            fallback
        } = this

        return {
            type: 'agent_text',
            payload: {
                text,
                quickReplies
            },
            delay: delay || undefined,
            fallback
        }
    }
}

export default AgentText
